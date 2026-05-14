/**
 * Generated Tool: usersTool_0703
 * Domain: Users
 * ID: 0703
 */
exports.usersTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0703:', error);
    throw error;
  }
};
