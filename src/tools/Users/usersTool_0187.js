/**
 * Generated Tool: usersTool_0187
 * Domain: Users
 * ID: 0187
 */
exports.usersTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0187:', error);
    throw error;
  }
};
