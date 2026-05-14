/**
 * Generated Tool: usersTool_0852
 * Domain: Users
 * ID: 0852
 */
exports.usersTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0852:', error);
    throw error;
  }
};
