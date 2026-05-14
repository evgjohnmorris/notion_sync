/**
 * Generated Tool: blocksTool_0023
 * Domain: Blocks
 * ID: 0023
 */
exports.blocksTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0023:', error);
    throw error;
  }
};
