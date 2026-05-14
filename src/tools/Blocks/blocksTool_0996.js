/**
 * Generated Tool: blocksTool_0996
 * Domain: Blocks
 * ID: 0996
 */
exports.blocksTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0996:', error);
    throw error;
  }
};
