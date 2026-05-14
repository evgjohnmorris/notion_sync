/**
 * Generated Tool: usersTool_0786
 * Domain: Users
 * ID: 0786
 */
exports.usersTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0786:', error);
    throw error;
  }
};
