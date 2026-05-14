/**
 * Generated Tool: usersTool_0421
 * Domain: Users
 * ID: 0421
 */
exports.usersTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0421:', error);
    throw error;
  }
};
