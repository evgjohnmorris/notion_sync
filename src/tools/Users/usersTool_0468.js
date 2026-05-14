/**
 * Generated Tool: usersTool_0468
 * Domain: Users
 * ID: 0468
 */
exports.usersTool_0468 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0468:', error);
    throw error;
  }
};
