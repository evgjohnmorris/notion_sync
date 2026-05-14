/**
 * Generated Tool: blocksTool_0576
 * Domain: Blocks
 * ID: 0576
 */
exports.blocksTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0576:', error);
    throw error;
  }
};
