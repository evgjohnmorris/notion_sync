/**
 * Generated Tool: usersTool_0718
 * Domain: Users
 * ID: 0718
 */
exports.usersTool_0718 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0718:', error);
    throw error;
  }
};
