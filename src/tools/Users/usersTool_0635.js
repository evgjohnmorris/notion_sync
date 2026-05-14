/**
 * Generated Tool: usersTool_0635
 * Domain: Users
 * ID: 0635
 */
exports.usersTool_0635 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0635:', error);
    throw error;
  }
};
