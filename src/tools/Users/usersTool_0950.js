/**
 * Generated Tool: usersTool_0950
 * Domain: Users
 * ID: 0950
 */
exports.usersTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0950:', error);
    throw error;
  }
};
