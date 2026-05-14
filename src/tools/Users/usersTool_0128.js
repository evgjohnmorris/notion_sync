/**
 * Generated Tool: usersTool_0128
 * Domain: Users
 * ID: 0128
 */
exports.usersTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0128:', error);
    throw error;
  }
};
