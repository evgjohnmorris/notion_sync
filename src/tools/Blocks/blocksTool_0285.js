/**
 * Generated Tool: blocksTool_0285
 * Domain: Blocks
 * ID: 0285
 */
exports.blocksTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0285:', error);
    throw error;
  }
};
