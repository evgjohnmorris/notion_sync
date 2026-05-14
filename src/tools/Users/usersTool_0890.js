/**
 * Generated Tool: usersTool_0890
 * Domain: Users
 * ID: 0890
 */
exports.usersTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0890:', error);
    throw error;
  }
};
