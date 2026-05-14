/**
 * Generated Tool: usersTool_0260
 * Domain: Users
 * ID: 0260
 */
exports.usersTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0260:', error);
    throw error;
  }
};
