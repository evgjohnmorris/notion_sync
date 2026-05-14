/**
 * Generated Tool: usersTool_0627
 * Domain: Users
 * ID: 0627
 */
exports.usersTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0627:', error);
    throw error;
  }
};
