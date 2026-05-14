/**
 * Generated Tool: usersTool_0976
 * Domain: Users
 * ID: 0976
 */
exports.usersTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0976:', error);
    throw error;
  }
};
