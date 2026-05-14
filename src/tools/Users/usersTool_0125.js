/**
 * Generated Tool: usersTool_0125
 * Domain: Users
 * ID: 0125
 */
exports.usersTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0125:', error);
    throw error;
  }
};
