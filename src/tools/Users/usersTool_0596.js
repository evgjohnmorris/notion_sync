/**
 * Generated Tool: usersTool_0596
 * Domain: Users
 * ID: 0596
 */
exports.usersTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0596:', error);
    throw error;
  }
};
