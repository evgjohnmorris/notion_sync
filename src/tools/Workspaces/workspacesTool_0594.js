/**
 * Generated Tool: workspacesTool_0594
 * Domain: Workspaces
 * ID: 0594
 */
exports.workspacesTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0594:', error);
    throw error;
  }
};
