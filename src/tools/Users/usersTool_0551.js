/**
 * Generated Tool: usersTool_0551
 * Domain: Users
 * ID: 0551
 */
exports.usersTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0551:', error);
    throw error;
  }
};
