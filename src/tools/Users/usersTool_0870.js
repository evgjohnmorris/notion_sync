/**
 * Generated Tool: usersTool_0870
 * Domain: Users
 * ID: 0870
 */
exports.usersTool_0870 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0870:', error);
    throw error;
  }
};
