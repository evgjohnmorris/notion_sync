/**
 * Generated Tool: workspacesTool_0576
 * Domain: Workspaces
 * ID: 0576
 */
exports.workspacesTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0576:', error);
    throw error;
  }
};
