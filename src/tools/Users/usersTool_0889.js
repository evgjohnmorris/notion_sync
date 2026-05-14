/**
 * Generated Tool: usersTool_0889
 * Domain: Users
 * ID: 0889
 */
exports.usersTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0889:', error);
    throw error;
  }
};
