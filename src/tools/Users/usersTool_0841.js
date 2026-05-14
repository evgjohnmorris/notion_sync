/**
 * Generated Tool: usersTool_0841
 * Domain: Users
 * ID: 0841
 */
exports.usersTool_0841 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0841:', error);
    throw error;
  }
};
