/**
 * Generated Tool: workspacesTool_0100
 * Domain: Workspaces
 * ID: 0100
 */
exports.workspacesTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0100:', error);
    throw error;
  }
};
