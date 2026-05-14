/**
 * Generated Tool: usersTool_0872
 * Domain: Users
 * ID: 0872
 */
exports.usersTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0872:', error);
    throw error;
  }
};
