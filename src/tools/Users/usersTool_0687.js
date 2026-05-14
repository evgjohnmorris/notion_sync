/**
 * Generated Tool: usersTool_0687
 * Domain: Users
 * ID: 0687
 */
exports.usersTool_0687 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0687:', error);
    throw error;
  }
};
