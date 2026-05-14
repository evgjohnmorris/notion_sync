/**
 * Generated Tool: usersTool_0041
 * Domain: Users
 * ID: 0041
 */
exports.usersTool_0041 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0041:', error);
    throw error;
  }
};
