/**
 * Generated Tool: usersTool_0602
 * Domain: Users
 * ID: 0602
 */
exports.usersTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0602:', error);
    throw error;
  }
};
