/**
 * Generated Tool: usersTool_0933
 * Domain: Users
 * ID: 0933
 */
exports.usersTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0933:', error);
    throw error;
  }
};
