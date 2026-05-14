/**
 * Generated Tool: usersTool_0236
 * Domain: Users
 * ID: 0236
 */
exports.usersTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0236:', error);
    throw error;
  }
};
