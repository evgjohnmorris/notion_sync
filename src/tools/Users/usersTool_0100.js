/**
 * Generated Tool: usersTool_0100
 * Domain: Users
 * ID: 0100
 */
exports.usersTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0100:', error);
    throw error;
  }
};
