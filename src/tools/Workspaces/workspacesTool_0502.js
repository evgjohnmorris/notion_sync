/**
 * Generated Tool: workspacesTool_0502
 * Domain: Workspaces
 * ID: 0502
 */
exports.workspacesTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0502:', error);
    throw error;
  }
};
