/**
 * Generated Tool: usersTool_0821
 * Domain: Users
 * ID: 0821
 */
exports.usersTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0821:', error);
    throw error;
  }
};
