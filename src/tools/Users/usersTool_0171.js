/**
 * Generated Tool: usersTool_0171
 * Domain: Users
 * ID: 0171
 */
exports.usersTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0171:', error);
    throw error;
  }
};
