/**
 * Generated Tool: workspacesTool_0445
 * Domain: Workspaces
 * ID: 0445
 */
exports.workspacesTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0445:', error);
    throw error;
  }
};
