/**
 * Generated Tool: usersTool_0611
 * Domain: Users
 * ID: 0611
 */
exports.usersTool_0611 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0611:', error);
    throw error;
  }
};
