/**
 * Generated Tool: usersTool_0791
 * Domain: Users
 * ID: 0791
 */
exports.usersTool_0791 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0791:', error);
    throw error;
  }
};
