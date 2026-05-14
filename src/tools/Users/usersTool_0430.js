/**
 * Generated Tool: usersTool_0430
 * Domain: Users
 * ID: 0430
 */
exports.usersTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0430:', error);
    throw error;
  }
};
