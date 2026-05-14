/**
 * Generated Tool: usersTool_0405
 * Domain: Users
 * ID: 0405
 */
exports.usersTool_0405 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0405:', error);
    throw error;
  }
};
