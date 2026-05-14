/**
 * Generated Tool: workspacesTool_0052
 * Domain: Workspaces
 * ID: 0052
 */
exports.workspacesTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0052:', error);
    throw error;
  }
};
