/**
 * Generated Tool: usersTool_0768
 * Domain: Users
 * ID: 0768
 */
exports.usersTool_0768 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0768:', error);
    throw error;
  }
};
