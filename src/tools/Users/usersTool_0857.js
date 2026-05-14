/**
 * Generated Tool: usersTool_0857
 * Domain: Users
 * ID: 0857
 */
exports.usersTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0857:', error);
    throw error;
  }
};
