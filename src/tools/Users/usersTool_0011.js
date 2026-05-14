/**
 * Generated Tool: usersTool_0011
 * Domain: Users
 * ID: 0011
 */
exports.usersTool_0011 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0011:', error);
    throw error;
  }
};
