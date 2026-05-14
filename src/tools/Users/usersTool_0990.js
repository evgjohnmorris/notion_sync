/**
 * Generated Tool: usersTool_0990
 * Domain: Users
 * ID: 0990
 */
exports.usersTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0990:', error);
    throw error;
  }
};
