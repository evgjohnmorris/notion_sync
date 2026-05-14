/**
 * Generated Tool: workspacesTool_0890
 * Domain: Workspaces
 * ID: 0890
 */
exports.workspacesTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0890:', error);
    throw error;
  }
};
