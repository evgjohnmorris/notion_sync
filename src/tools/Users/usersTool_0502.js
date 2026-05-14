/**
 * Generated Tool: usersTool_0502
 * Domain: Users
 * ID: 0502
 */
exports.usersTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0502:', error);
    throw error;
  }
};
