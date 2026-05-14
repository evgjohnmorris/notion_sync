/**
 * Generated Tool: usersTool_0823
 * Domain: Users
 * ID: 0823
 */
exports.usersTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0823:', error);
    throw error;
  }
};
