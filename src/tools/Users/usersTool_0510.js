/**
 * Generated Tool: usersTool_0510
 * Domain: Users
 * ID: 0510
 */
exports.usersTool_0510 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0510:', error);
    throw error;
  }
};
