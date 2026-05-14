/**
 * Generated Tool: usersTool_0895
 * Domain: Users
 * ID: 0895
 */
exports.usersTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0895:', error);
    throw error;
  }
};
