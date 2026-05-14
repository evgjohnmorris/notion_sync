/**
 * Generated Tool: usersTool_0848
 * Domain: Users
 * ID: 0848
 */
exports.usersTool_0848 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0848:', error);
    throw error;
  }
};
